import React, { useContext } from 'react'
import AlertContext from "../context/alert/alertContext"

export default function Alert() {
    const {alert} = useContext(AlertContext)
    return (
    <>
            < div >
            <div className={`alert alert-${alert.type}`} role="alert">
                {alert.message}        </div>
                </div>
        
        </>
    )
}
