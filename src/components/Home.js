
export default function Home() {
    
    // styles
    const TermStyles = {
        fontSize: '28px',
        position: 'fixed',
        left: '0',
        top: '0',
        zIndex : '10',
        userSelect :'none',
        padding: '20px 0px 0px 20px',
        color: '#8dc4e9',
        opacity: '0.9',

    }

    return (
        <div>     
            <a href="#home">
                <em style={TermStyles} title="Back to top"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-terminal"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg></em>
            </a>
        </div>
    )
}