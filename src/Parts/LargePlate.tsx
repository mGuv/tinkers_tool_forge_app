import React from "react";
import BasePart from "./BasePart";
import PartProps from "./PartProps";

export default class LargePlate extends React.PureComponent<PartProps> {
    public constructor(props: PartProps) {
        super(props);
    }

    public render() {
        return <BasePart materialColor={this.props.materialColor} partName="part/large_plate"/>;
    }
}