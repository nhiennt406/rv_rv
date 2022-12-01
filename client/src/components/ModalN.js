import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function ModalN() {
  return (
    <Modal
    //   trigger={<Button>Hủy</Button>}
      header='Reminder!'
      content='Call Benjamin regarding the reports.'
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />
  )
}

export default ModalN