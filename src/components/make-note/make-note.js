const MakeNote = (props) => {

    return(
        <div className='wrapper-make__note'>
            <input type='text' placeholder='Type something' onKeyDown = { props.onKeyDown }/>
        </div>
    )
}

export default MakeNote