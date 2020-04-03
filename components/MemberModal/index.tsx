import Modal from 'react-modal'
import Link from 'next/link'
import { useRouter } from 'next/router'

Modal.setAppElement('#__next')

export const MemberModal: React.FC<{
  id: number;
}> = ({ id }) => {
  const router = useRouter();

  return (
    <div>
      <Modal
        isOpen={ !!id }
      >
        <div>
          { id }
        </div>
      </Modal>
    </div>
  )
}
