export const MemberDetail: React.FC<{
  id: number;
}> = ({ id }) => {
  return (
    <div style={{
      backgroundColor: '#222',
      color: '#fff',
    }}>
      <h2>detail</h2>
      <p>{ id }</p>
    </div>
  )
}
