import React, { useMemo } from 'react';

const codeSnippets = [
  "const Component = () => { ... }",
  "import { React } from 'react';",
  "useEffect(() => { cleanup });",
  "color: '#00abf0';",
  "return <div>Hello</div>;",
  "npm install @google/genai",
  ".hero { display: flex; }",
  "function fetchData() { ... }",
  "const [state, setState] = useState(0);",
  "border-radius: 50%;"
];

const CodeAnimation: React.FC = () => {
  const animatedSnippets = useMemo(() => {
    return codeSnippets.map((code, index) => {
      const style = {
        left: `${Math.random() * 90}%`,
        animationDuration: `${10 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 2}s`,
        bottom: `-${Math.random() * 20 + 20}vh`,
      };
      return (
        <pre key={index} className="code-line" style={style}>
          {code}
        </pre>
      );
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {animatedSnippets}
    </div>
  );
};

export default CodeAnimation;