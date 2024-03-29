import { MdDeleteForever } from 'react-icons/md';

export function Note({ id, text, date}) {
    return (
        <div className="note">
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>
        </div>
    )
}