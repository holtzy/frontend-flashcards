import styles from './sandboxPanel.module.css'
import { useCallback, useState } from 'react';
import { throttle } from 'lodash';

const MIN_INSPECTOR_HEIGHT_THRESHOLD = 200;

export const SandboxPanel = (props: {url: string}) => {

  const [inspectorHeight, setInspectorHeight] = useState(0);

  const hideGraphInspector = useCallback(() => {
    setInspectorHeight(0);
  }, []);

  const showGraphInspector = useCallback(() => {
    setInspectorHeight(MIN_INSPECTOR_HEIGHT_THRESHOLD);
  }, []);

  const onResizerMouseDown = (event: React.MouseEvent) => {
    const positionInHandleIcon =
        event.clientY - event.currentTarget.getBoundingClientRect().top;
    console.log("positionInHandleIcon", positionInHandleIcon)
    console.log("window.innerHeight", window.innerHeight)
    const onMouseMove = throttle((e: MouseEvent) => {
      const newHeight =
            window.innerHeight - e.clientY + positionInHandleIcon;
      console.log("newHeight", newHeight)
      setInspectorHeight(newHeight);
    }, 10)

    const onMouseUp = (e: MouseEvent) => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      const newHeight =
            window.innerHeight - e.clientY + positionInHandleIcon;
      if (newHeight < MIN_INSPECTOR_HEIGHT_THRESHOLD) {
        hideGraphInspector();
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (

    <div className={styles.sandboxContainer} style={{height: inspectorHeight}}>

      {/* Sandbox is included using an iframe */}
      {/* <iframe src={props.url}
        style={{
          width: '100%',
          height: inspectorHeight,
          border: "solid",
          borderWidth: 2,
          borderRadius: '4px',
          overflow: 'hidden'
        }}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
      >
      </iframe> */}

      {/* Horizontal resize line */}
      <div
        className={styles.resizer}
        onMouseDown={onResizerMouseDown}
      />

      {/* Button to drag once it's open */}
      {inspectorHeight !== 0 &&
        <div className={styles.dragButton} onMouseDown={onResizerMouseDown}>Drag Button</div>
      }

      {/* Button to open when it's closed */}
      {inspectorHeight === 0 &&
        <div className={styles.openButton} onClick={showGraphInspector}>Open Button</div>
      }

    </div>
  );
}
