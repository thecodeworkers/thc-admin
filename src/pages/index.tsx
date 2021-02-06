import { Layout } from '../components'

export default function Home() {
  return (
    <Layout>
      <div className="hold-transition skin-blue sidebar-mini">

        <div className="wrapper">

          <header className="main-header">
            
            <a href="index2.html" className="logo">
              
              <span className="logo-mini"><b>A</b>LT</span>
              
              <span className="logo-lg"><b>Admin</b>LTE</span>
            </a>
            
            <nav className="navbar navbar-static-top">
              
              <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
              </a>

              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  
                
                  <li className="dropdown notifications-menu">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-bell-o"></i>
                      <span className="label label-warning">10</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="header">You have 10 notifications</li>
                      <li>
                        
                        <ul className="menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-users text-aqua"></i> 5 new members joined today
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                              page and may cause design problems
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-users text-red"></i> 5 new members joined
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-user text-red"></i> You changed your username
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="footer"><a href="#">View all</a></li>
                    </ul>
                  </li>


                  <li className="dropdown user user-menu">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
                      <span className="hidden-xs">Alexander Pierce</span>
                    </a>
                    <ul className="dropdown-menu">
                      
                      <li className="user-header">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>

                        <p>
                          Alexander Pierce - Web Developer
                          <small>Member since Nov. 2012</small>
                        </p>
                      </li>
                      
                      <li className="user-body">
                        <div className="row">
                          <div className="col-xs-4 text-center">
                            <a href="#">Followers</a>
                          </div>
                          <div className="col-xs-4 text-center">
                            <a href="#">Sales</a>
                          </div>
                          <div className="col-xs-4 text-center">
                            <a href="#">Friends</a>
                          </div>
                        </div>
                        
                      </li>
                      
                      <li className="user-footer">
                        <div className="pull-left">
                          <a href="#" className="btn btn-default btn-flat">Profile</a>
                        </div>
                        <div className="pull-right">
                          <a href="#" className="btn btn-default btn-flat">Sign out</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <aside className="main-sidebar">
            
            <section className="sidebar">
              
              <div className="user-panel">
                <div className="pull-left image">
                  <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                </div>
                <div className="pull-left info">
                  <p>Alexander Pierce</p>
                  <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                </div>
              </div>
              
            
              
              
              <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                <li className="active treeview">
                  <a href="#">
                    <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                    <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-files-o"></i>
                    <span>Layout Options</span>
                    <span className="pull-right-container">
                      <span className="label label-primary pull-right">4</span>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                    <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                    <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                    <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                  </ul>
                </li>
                <li>
                  <a href="pages/widgets.html">
                    <i className="fa fa-th"></i> <span>Widgets</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-green">new</small>
                    </span>
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-pie-chart"></i>
                    <span>Charts</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                    <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                    <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                    <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-laptop"></i>
                    <span>UI Elements</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                    <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
                    <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
                    <li><a href="pages/UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
                    <li><a href="pages/UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
                    <li><a href="pages/UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-edit"></i> <span>Forms</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
                    <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                    <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-table"></i> <span>Tables</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                    <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
                  </ul>
                </li>
                <li>
                  <a href="pages/calendar.html">
                    <i className="fa fa-calendar"></i> <span>Calendar</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-red">3</small>
                      <small className="label pull-right bg-blue">17</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="pages/mailbox/mailbox.html">
                    <i className="fa fa-envelope"></i> <span>Mailbox</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-yellow">12</small>
                      <small className="label pull-right bg-green">16</small>
                      <small className="label pull-right bg-red">5</small>
                    </span>
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-folder"></i> <span>Examples</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="pages/examples/invoice.html"><i className="fa fa-circle-o"></i> Invoice</a></li>
                    <li><a href="pages/examples/profile.html"><i className="fa fa-circle-o"></i> Profile</a></li>
                    <li><a href="pages/examples/login.html"><i className="fa fa-circle-o"></i> Login</a></li>
                    <li><a href="pages/examples/register.html"><i className="fa fa-circle-o"></i> Register</a></li>
                    <li><a href="pages/examples/lockscreen.html"><i className="fa fa-circle-o"></i> Lockscreen</a></li>
                    <li><a href="pages/examples/404.html"><i className="fa fa-circle-o"></i> 404 Error</a></li>
                    <li><a href="pages/examples/500.html"><i className="fa fa-circle-o"></i> 500 Error</a></li>
                    <li><a href="pages/examples/blank.html"><i className="fa fa-circle-o"></i> Blank Page</a></li>
                    <li><a href="pages/examples/pace.html"><i className="fa fa-circle-o"></i> Pace Page</a></li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-share"></i> <span>Multilevel</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                    <li className="treeview">
                      <a href="#"><i className="fa fa-circle-o"></i> Level One
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                        <li className="treeview">
                          <a href="#"><i className="fa fa-circle-o"></i> Level Two
                            <span className="pull-right-container">
                              <i className="fa fa-angle-left pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                            <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                  </ul>
                </li>
                <li><a href="https://adminlte.io/docs"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
              </ul>
            </section>
            
          </aside>


          <div className="content-wrapper">
            
            <section className="content-header">
              <h1>
                Dashboard
                <small>Control panel</small>
              </h1>
              <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                <li className="active">Dashboard</li>
              </ol>
            </section>

            
          
            
          </div>

          <footer className="main-footer">
            <div className="pull-right hidden-xs">
              <b>Version</b> 2.4.0
            </div>
            <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
            reserved.
          </footer>

          <div className="control-sidebar-bg"></div>
        </div>
      </div>

    </Layout>
  )
}
