import { useEffect, useRef } from 'react'

const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const fragmentShaderSource = `
  precision mediump float;
  uniform float time;
  uniform vec2 resolution;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    uv.y = 1.0 - uv.y;

    // Background gradient — dark navy
    vec4 bgColor1 = vec4(0.04, 0.08, 0.11, 1.0);
    vec4 bgColor2 = vec4(0.06, 0.12, 0.18, 1.0);
    vec4 bg = mix(bgColor1, bgColor2, uv.y);

    float t = time * 0.18;
    vec2 p = uv * 2.5;

    float n1 = fbm(p + vec2(t * 0.4, t * 0.3));
    float n2 = fbm(p + vec2(-t * 0.3, t * 0.5) + vec2(3.7, 1.2));
    float n3 = fbm(p + vec2(t * 0.2, -t * 0.4) + vec2(7.3, 5.1));

    // Flowing line patterns
    float line1 = abs(sin((uv.x * 4.0 + n1 * 2.0 - t * 0.5) * 3.14159));
    float line2 = abs(sin((uv.x * 3.0 + n2 * 2.5 + t * 0.4) * 3.14159));
    float line3 = abs(sin((uv.y * 5.0 + n3 * 1.8 - t * 0.3) * 3.14159));

    float lines = pow(1.0 - line1, 12.0) * 0.6
                + pow(1.0 - line2, 14.0) * 0.4
                + pow(1.0 - line3, 16.0) * 0.3;

    // Blue accent color — #4b8cb8
    vec4 lineColor = vec4(0.18, 0.42, 0.62, 1.0);

    // Subtle glow tint
    float glow = fbm(uv * 1.8 + vec2(t * 0.2, 0.0)) * 0.12;
    vec4 tint = vec4(0.10, 0.25, 0.38, 1.0) * glow;

    vec4 color = bg + tint + lineColor * lines * 0.55;
    color = clamp(color, 0.0, 1.0);

    // Vignette
    vec2 vig = uv * 2.0 - 1.0;
    float vignette = 1.0 - dot(vig, vig) * 0.28;
    color.rgb *= vignette;

    gl_FragColor = color;
  }
`

export default function ShaderBackground({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl')
    if (!gl) return

    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!
      gl!.shaderSource(s, src)
      gl!.compileShader(s)
      return s
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertexShaderSource))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragmentShaderSource))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)

    const pos = gl.getAttribLocation(prog, 'position')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'time')
    const uRes  = gl.getUniformLocation(prog, 'resolution')

    let raf: number
    let start = performance.now()

    function resize() {
      const w = canvas!.clientWidth  * window.devicePixelRatio
      const h = canvas!.clientHeight * window.devicePixelRatio
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width  = w
        canvas!.height = h
        gl!.viewport(0, 0, w, h)
      }
    }

    function render() {
      resize()
      gl!.uniform1f(uTime, (performance.now() - start) / 1000)
      gl!.uniform2f(uRes, canvas!.width, canvas!.height)
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  )
}
