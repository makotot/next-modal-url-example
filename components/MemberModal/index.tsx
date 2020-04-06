import Modal from 'react-modal'
import { MemberDetail } from '../MemberDetail'

Modal.setAppElement('#__next')

export const MemberModal: React.FC<{
  id: number;
}> = ({ id }) => {
  return (
    <Modal
      isOpen={ !!id }
    >
      <h2>modal</h2>
      <MemberDetail id={ id } />
    </Modal>
  )
}
