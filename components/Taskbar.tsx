export default function Taskbar(props: any) {
  return(
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-purple-500">
      <div className="taskbar-items">
        {props.children}
      </div>
    </div>
  )
};
