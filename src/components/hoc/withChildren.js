import React from "react";

const withChildren = (Wrapped, renderFn) => {
    return (props) => {
        return <Wrapped {...props}>{renderFn}</Wrapped>;
    };
};

export default withChildren;