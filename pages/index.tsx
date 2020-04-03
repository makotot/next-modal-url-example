import Modal from 'react-modal'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MemberModal } from '../components/MemberModal'

Modal.setAppElement('#__next')

const Index = () => {
  const router = useRouter()

  return (
    <div>
      <Link href="/?memberId=1" as="members/1">member 1</Link>
      <MemberModal id={ Number(router.query.memberId) } />
    </div>
  )
}

export default Index
