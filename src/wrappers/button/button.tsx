import { useEffect, useRef } from "react";
import { Components } from "@paipower/core/dist/types/components";

export default function Button(props: Components.PaiCoreButton){
    const buttonRef = useRef<any>(null);
    
    useEffect(() => {
        if(buttonRef.current) {
            buttonRef.current.primary = props.primary;
            buttonRef.current.value = props.value;
        }
    }, [])

    return <pai-core-button primary={props.primary} value={props.value}></pai-core-button>
}
