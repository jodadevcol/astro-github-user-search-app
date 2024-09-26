function Button({ children, props }: any) {
  return (
    <button className="bg-shared-100 rounded-lg text-white px-6 hover:bg-shared-300 py-3 text-base font-bold animation-colors-text" {...props}>
      {children}
    </button>
  )
}

export default Button