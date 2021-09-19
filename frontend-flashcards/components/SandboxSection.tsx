import styles from './sandboxSection.module.css'

export const SandboxSection = (props: {url: string}) => {

  return (

    <div className={styles.sandboxContainer}>

      {/* Sandbox is included using an iframe */}
      <iframe src={props.url}
        style={{
          width: '100%',
          height: 700,
          border: "solid",
          borderWidth: 0,
          borderRadius: '0px',
          overflow: 'hidden'
        }}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"

      >
      </iframe>

    </div>
  );
}
