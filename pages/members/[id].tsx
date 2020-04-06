import Modal from 'react-modal'
import { useRouter } from 'next/router'
import { MemberDetail } from '../../components/MemberDetail'

Modal.setAppElement('#__next')

const Member = () => {
  const router = useRouter()

  return (
    <div>
      <h1>member</h1>
      <MemberDetail id={ Number(router.query.id) } />
    </div>
  )
}

export default Member
