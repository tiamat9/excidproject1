import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Acts } from "../api/sg-statutes/Acts.js"

function Homepage() {
    const [data, setData] = useState(Acts);

    useEffect(() => {
        console.warn(Acts)
    }, [])

    return (
        <View>
            {Acts && Acts.map((Acts) => (
                <View style={{ backgroundColor: 'red', margin: 20 }}>
                    <Text>
                        {JSON.stringify(this.Acts)}
                    </Text>
                </View>

            ))}
        </View>
    )
}

export default Homepage