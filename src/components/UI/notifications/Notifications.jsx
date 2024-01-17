import { useToaster } from 'react-hot-toast';

const Notifications = () => {
    const { toasts, handlers } = useToaster();
    const { startPause, endPause, calculateOffset, updateHeight } = handlers;

    return (
        <div
            style={{
                position: 'fixed',
                top: 20,
                left: 20,
            }}
            onMouseEnter={startPause}
            onMouseLeave={endPause}
        >
            {toasts.map((toast) => {
                const offset = calculateOffset(toast, {
                    reverseOrder: false,
                    gutter: 8,
                });

                const ref = (el) => {
                    if (el && typeof toast.height !== "number") {
                        const height = el.getBoundingClientRect().height;
                        updateHeight(toast.id, height);
                    }
                };
                return (
                    <div
                        key={toast.id}
                        ref={ref}
                        style={{
                            position: 'absolute',
                            padding: '10px',
                            width: '200px',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderRadius: '12px',
                            backgroundColor: '#212121',
                            transition: 'all 0.5s ease-out',
                            opacity: toast.visible ? 1 : 0,
                            transform: `translateY(${offset}px)`,
                        }}
                        {...toast.ariaProps}
                    >
                        {toast.message}
                    </div>
                );
            })}
        </div>
    );
}
export default Notifications;