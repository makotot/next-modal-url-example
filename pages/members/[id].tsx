import Modal from 'react-modal'
import { useRouter } from 'next/router'
import { MemberModal } from '../../components/MemberModal'

Modal.setAppElement('#__next')

const Member = () => {
  const router = useRouter()
  console.log(router.query)

  return (
    <div>
      <MemberModal id={ Number(router.query.id) } />
    </div>
  )
}

export default Member
