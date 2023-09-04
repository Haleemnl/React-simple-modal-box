import React, { useState } from "react"
import './modal.css'

// content
export default function Modal() {

    const [clicked, setClicked] = useState(false)

    const openModal = () => {
        setClicked(true)
    }

    const close = () => {
        setClicked(false)
    }



    return (
        <div className="modal-container">

            {/* <!-- Trigger/Open The Modal --> */}
            <button onClick={openModal} id="myBtn">Open Modal</button>

            {/* <!-- The Modal --> */}
            <div className={clicked ? 'modal' : 'modal-closed'}>

                {/* <!-- Modal content --> */}
                <div className="modal-content">
                    <span onClick={close} className="close">&times;</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia totam voluptas rem, vel deleniti incidunt corrupti fugit alias? Temporibus accusamus reprehenderit quam et perferendis numquam, odit dignissimos saepe vel perspiciatis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia totam voluptas rem, vel deleniti incidunt corrupti fugit alias? Temporibus accusamus reprehenderit quam et perferendis numquam, odit dignissimos saepe vel perspiciatis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia totam voluptas rem, vel deleniti incidunt corrupti fugit alias? Temporibus accusamus reprehenderit quam et perferendis numquam, odit dignissimos saepe vel perspiciatis.

                    </p>

                </div>

            </div>

        </div>
    )
}