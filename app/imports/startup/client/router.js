import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { $ } from 'meteor/jquery';


/*                        LANDING ROUTE                       */

export const landingPageRouteName = 'Landing_Page';
FlowRouter.route('/', {
  name: landingPageRouteName,
  action() {
    BlazeLayout.render('Landing_Layout', { main: landingPageRouteName });
  },
});

/*                        DIRECTORY ROUTE                       */

function addDirectoryBodyClass() {
  $('body').addClass('directory-page-body');
}

function removeDirectoryBodyClass() {
  $('body').removeClass('directory-page-body');
}

export const directoryPageRouteName = 'Directory_Page';
FlowRouter.route('/directory', {
  name: directoryPageRouteName,
  action() {
    BlazeLayout.render('Directory_Layout', { main: directoryPageRouteName });
  },
  triggersEnter: [addDirectoryBodyClass],
  triggersExit: [removeDirectoryBodyClass],
});


/*                        USER ROUTES                      */


function addUserBodyClass() {
  $('body').addClass('user-layout-body');
}

function removeUserBodyClass() {
  $('body').removeClass('user-layout-body');
}

const userRoutes = FlowRouter.group({
  prefix: '/:username',
  name: 'userRoutes',
  triggersEnter: [addUserBodyClass],
  triggersExit: [removeUserBodyClass],
});

export const profilePageRouteName = 'Profile_Page';
userRoutes.route('/profile', {
  name: profilePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: profilePageRouteName });
  },
});

export const homePageRouteName = 'Home_Page';
userRoutes.route('/home', {
  name: homePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: homePageRouteName });
  },
});

export const adminPageRouteName = 'Admin_Page';
userRoutes.route('/admin', {
  name: adminPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: adminPageRouteName });
  },
});

export const adminBanPageRouteName = 'Admin_Ban_Page';
userRoutes.route('/ban', {
  name: adminBanPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: adminBanPageRouteName });
  },
});

export const adminCreatePageRouteName = 'Create_Page';
userRoutes.route('/create', {
  name: adminCreatePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: adminCreatePageRouteName });
  },
});

export const adminMonitorPageRouteName = 'Monitor_Page';
userRoutes.route('/monitor', {
  name: adminMonitorPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: adminMonitorPageRouteName });
  },
});

export const calendarPageRouteName = 'Calendar_Page';
userRoutes.route('/calendar', {
  name: calendarPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: calendarPageRouteName });
  },
});

/*                        BEATS ROUTES                       */
export const beatsPageRouteName = 'Beats_Page';
userRoutes.route('/beats', {
  name: beatsPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: beatsPageRouteName });
  },
});

/*                        MISC ROUTES                       */
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('Page_Not_Found');
  },
};
