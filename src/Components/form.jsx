import React from "react";

function Form(){
    return ( <div>
                <form action="https://api.web3forms.com/submit" method="POST" className="Forms" name="feedbackform">

                    <input type="hidden" name="access_key" value="30f0e4c3-8dc4-4e7f-91cf-50f79eea3c1f"/>
                    <input type="text" name="name" required placeholder="Enter Your Name"/><br/>
                    <input type="email" name="email" required placeholder="Enter Your Email"/><br/>
                    <textarea name="message" required placeholder="Enter Your Message"></textarea><br/>
                    <button type="submit">Submit Form</button>

                </form>
            </div>
    )
}

export default Form;