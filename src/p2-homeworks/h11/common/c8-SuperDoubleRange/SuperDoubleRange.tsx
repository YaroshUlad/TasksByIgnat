import React from 'react';
import ReactSlider from "react-slider";
import './SuperDoubleRange.css';


type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({onChangeRange, value,}) => {
    return (
        <>
            <div>
                <ReactSlider
                    value={value}
                    onChange={(value: number[]) => {
                        onChangeRange(value)
                    }}
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    defaultValue={[0, 100]}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    pearling
                    minDistance={5}
                />
            </div>
        </>
    )
}

export default SuperDoubleRange
