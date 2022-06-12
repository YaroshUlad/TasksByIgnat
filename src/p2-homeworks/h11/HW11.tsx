import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>

                <SuperRange
                    onChangeRange={(value: number)=> setValue1(value)}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
                <span>{value1}</span>
            </div>

            <div>
                <SuperDoubleRange
                    value={[value1,value2]}
                    onChangeRange={([a,b])=>{
                        setValue1(a)
                        setValue2(b)
                    }}

                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
