export default function Email() {

    // Copy email text and animate.
    function copy(e) {
        const email = e.target.innerText;
        navigator.clipboard.writeText(email);
        e.target.className += ' btn-contact__copied'
        setTimeout(() => {
            e.target.className = 'btn-contact'
        }, 2800)
    }


    return (
        <button onClick={copy} className='btn-contact'>
            paul@paulyprograms.com
        </button>
    )
}