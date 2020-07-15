import * as React from "react"
import { ScaleButton, ScaleModal } from "@scaleds/components-react-telekom"

const icons = {
  close:
    "M12,1 C18.075,1 23,5.925 23,12 C23,18.075 18.075,23 12,23 C5.925,23 1,18.075 1,12 C1,5.925 5.925,1 12,1 Z M12,2.5 C6.7615,2.5 2.5,6.7615 2.5,12 C2.5,17.2385 6.7615,21.5 12,21.5 C17.2385,21.5 21.5,17.2385 21.5,12 C21.5,6.7615 17.2385,2.5 12,2.5 Z M8.91056165,7.86140176 L8.99468009,7.93401991 L11.999,10.939 L15.0055199,7.93381991 C15.2984131,7.6409267 15.7732869,7.6409267 16.0661801,7.93381991 C16.3324466,8.20008648 16.3566527,8.61675016 16.1387982,8.91036165 L16.0661801,8.99448009 L13.06,11.999 L16.0661801,15.0055199 C16.3590733,15.2984131 16.3590733,15.7732869 16.0661801,16.0661801 C15.7999135,16.3324466 15.3832498,16.3566527 15.0896383,16.1387982 L15.0055199,16.0661801 L11.999,13.06 L8.99468009,16.0659801 C8.70178687,16.3588733 8.22691313,16.3588733 7.93401991,16.0659801 C7.66775335,15.7997135 7.6435473,15.3830498 7.86140176,15.0894383 L7.93401991,15.0053199 L10.939,12 L7.93401991,8.99468009 C7.6411267,8.70178687 7.6411267,8.22691313 7.93401991,7.93401991 C8.20028648,7.66775335 8.61695016,7.6435473 8.91056165,7.86140176 Z",
}

const SizeSwitch = ({ setModalSize, changeBacon, toggleActions }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        lineHeight: "50px",
      }}
    >
      <ScaleButton
        onClick={e => {
          setModalSize("small")
        }}
      >
        Small
      </ScaleButton>
      <ScaleButton
        onClick={e => {
          setModalSize("default")
        }}
      >
        Default
      </ScaleButton>
      <ScaleButton
        onClick={e => {
          setModalSize("large")
        }}
      >
        Large
      </ScaleButton>

      <ScaleButton onClick={changeBacon(1)}>More bacon</ScaleButton>
      <ScaleButton onClick={changeBacon(-1)}>Less bacon</ScaleButton>
      <ScaleButton onClick={toggleActions}>Toggle actions</ScaleButton>
    </div>
  )
}
const Modal = () => {
  const [isModalOpen, setModalOpen] = React.useState(false)
  const [isWhiteModalOpen, setWhiteModalOpen] = React.useState(false)
  const [modalSize, setModalSize] = React.useState("large")
  const [baconCount, setBaconCount] = React.useState(1)
  const [showActions, setShowActions] = React.useState(true)
  const ModalContent = () => (
    <>
      <span slot="header">Header</span>

      <div>
        <SizeSwitch
          setModalSize={setModalSize}
          changeBacon={n => () =>
            setBaconCount(baconCount + n < 0 ? 0 : baconCount + n)}
          toggleActions={() => setShowActions(!showActions)}
        />
        {[...Array(baconCount)].map((_, i) => (
          <p key={i}>
            Bacon ipsum dolor amet jerky pancetta chislic, corned beef shankle
            leberkas boudin sirloin ribeye rump. Strip steak ribeye meatball,
            ground round pastrami t-bone shank biltong alcatra pork loin jerky
            chicken short ribs cupim.
          </p>
        ))}
      </div>

      <span slot="close">
        <svg width="24px" height="24px" viewBox="0 0 24 24">
          <path fill="#161616" d={icons.close} />
        </svg>
      </span>

      {showActions && (
        <span slot="modal-actions">
          <ScaleButton
            variant="secondary"
            onClick={() => {
              setModalOpen(false)
              setWhiteModalOpen(false)
            }}
            style={{ marginRight: "8px" }}
          >
            cancel
          </ScaleButton>
          <ScaleButton
            onClick={() => {
              setModalOpen(false)
              setWhiteModalOpen(false)
            }}
          >
            submit
          </ScaleButton>
        </span>
      )}
    </>
  )

  return (
    <>
      <ScaleButton
        style={{ marginRight: "8px", lineHeight: "50px" }}
        onClick={() => setModalOpen(true)}
      >
        Open modal
      </ScaleButton>
      <ScaleButton onClick={() => setWhiteModalOpen(true)}>
        White actions background
      </ScaleButton>

      <ScaleModal
        opened={isWhiteModalOpen}
        onScaleClose={() => setWhiteModalOpen(false)}
        size={modalSize}
        styles={{
          // @ts-ignore
          modal__actions: {
            background: "white",
          },
        }}
      >
        <ModalContent />
      </ScaleModal>
      <ScaleModal
        opened={isModalOpen}
        onScaleClose={() => setModalOpen(false)}
        size={modalSize}
      >
        <ModalContent />
      </ScaleModal>
    </>
  )
}

export default Modal
