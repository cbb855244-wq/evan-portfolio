type ContactInfoProps = {
  className?: string;
  showEmailArrow?: boolean;
  tone?: 'dark' | 'light';
};

export function ContactInfo({
  className,
  showEmailArrow = false,
  tone = 'light',
}: ContactInfoProps) {
  const classes = ['contact-info', `contact-info-${tone}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <p className="contact-info-item contact-info-email">
        <span className="contact-info-label">
          <span>邮箱</span>
          <span>EMAIL</span>
        </span>
        <a className="contact-info-value" href="mailto:2035786031@qq.com">
          2035786031@qq.com{showEmailArrow ? ' ↗' : ''}
        </a>
      </p>
      <p className="contact-info-item contact-info-phone">
        <span className="contact-info-label">
          <span>电话</span>
          <span>PHONE</span>
        </span>
        <a className="contact-info-value" href="tel:18800205337">
          18800205337
        </a>
      </p>
      <p className="contact-info-item contact-info-location">
        <span className="contact-info-label">
          <span>地点</span>
          <span>LOCATION</span>
        </span>
        <em>上海，中国</em>
        <span className="contact-info-value">
          SHANGHAI
          <br />
          CHINA
        </span>
      </p>
    </div>
  );
}
