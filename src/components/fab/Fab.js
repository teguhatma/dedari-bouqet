import { Button } from '../button/Button';
import './Fab.css';

export const Fab = ({ content, type, styles }) => {
  return (
    <ul className="fab-container">
      <Button content={content} type={type} styles={styles} />
    </ul>
  );
};
