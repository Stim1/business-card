import AnimatedCursor from "react-animated-cursor"

export const Coursor: React.FC = () => {
  return(
    <AnimatedCursor
      innerSize={10}
      outerSize={70}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={3}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  );
};