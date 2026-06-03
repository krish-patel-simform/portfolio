import type { ComponentType } from "react";

function withId<P>(WrappedComponent: ComponentType<P>, id: string) {
  const EnhancedComponent = (props: P) => {
    return (
      <>
        <WrappedComponent id={id} {...props} />
      </>
    );
  };
  return EnhancedComponent;
}

export { withId };
