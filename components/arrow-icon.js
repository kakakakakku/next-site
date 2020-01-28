const ArrowIcon = ({ left, right, children }) => (
  <span>
    {children}
    <style jsx>{`
      span {
        ${left ? 'margin-right: .5rem; margin-left: -.25rem;' : ''}
        ${right ? 'margin-left: .5rem; margin-right: -.25rem;' : ''}
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
      }
    `}</style>
  </span>
);

export default ArrowIcon;
