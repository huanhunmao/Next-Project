import { Fragment, useContext } from 'react';
import Notification from '../ui/notification/notification';
import MainHeader from './main-header';
import NotificationContext from '../../store/notification-context';

function Layout(props) {
    const notificationCtx = useContext(NotificationContext)

    const activeNotification = notificationCtx.notification
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && <Notification 
      status={activeNotification.status} 
      message={activeNotification.message} 
      title={activeNotification.title}/>}
    </Fragment>
  );
}

export default Layout;
