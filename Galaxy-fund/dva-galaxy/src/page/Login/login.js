import React from 'react';
import { connect } from 'dva';
import style from './login.css';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// 选项卡
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// 框
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
// 表单
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
function TabContainer(props) {
  return (


    <Typography component="div" style={{ height: '410px' }}>
      {props.children}
    </Typography>


  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const BootstrapInput = withStyles(theme => ({
  root: {

    'label + &': {
      marginTop: theme.spacing.unit * 3,
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'white',
    border: '1px solid skyblue',
    fontSize: 16,
    width: '455px',
    padding: '10px 26px 10px 12px',

    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 493,

  },
  dense: {
    marginTop: 16,

  },
  menu: {
    width: 455,
  },
  button: {
    margin: theme.spacing.unit,
    color: '#fedf32',
    width: 493,
    borderColor: '#fff59d',
    height: 50,
    fontSize: 22
  },
  button2: {
    margin: theme.spacing.unit,

    height: 50
  },
  input: {
    display: 'none',
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    age: '',
    name: 'Cat in the Hat',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  // class CustomizedSelects extends React.Component {
  //   state = {
  //     age: '',
  //   };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChange2 = event => {
    this.setState({ age: event.target.value });
  };

  handleChange3 = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={style.c_login}>
        <div className={style.container}>
          <div className={style.c_header}>
            <div className={style.c_logo}></div>
            <h1 className={style.h1}>
              网上交易账户登录
          </h1>
          </div>
          <div className={style.c_main}>
            <div className={classes.root}>
              <AppBar position="static" style={{ background: 'white' }}>
                <Tabs value={value} onChange={this.handleChange} className={style.tabs} style={{ width: '100%' }}>
                  <Tab label="个人客户" className={style.tabs} />
                  <Tab label="机构客户" className={style.tabs} />

                </Tabs>
              </AppBar>
              {value === 0 && <TabContainer>
                <form className={classes.root} autoComplete="off" style={{ width: '100%' }}>
                  {/* <FormControl className={classes.margin}>
                    <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
                      Age
          </InputLabel>
                    <BootstrapInput />
                  </FormControl> */}
                  <FormControl className={classes.margin}>
                    <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
                      证件类型
          </InputLabel>
                    <Select
                      className={style.input1}
                      value={this.state.age}
                      onChange={this.handleChange2}
                      input={<BootstrapInput name="age" id="age-customized-select"
                      />}

                    >
                      <MenuItem value="">

                      </MenuItem>
                      <MenuItem value={10}>户口本</MenuItem>
                      <MenuItem value={20}>基金账号</MenuItem>
                      <MenuItem value={30}>身份证</MenuItem>
                      <MenuItem value={20}>军官证</MenuItem>
                      <MenuItem value={30}>士兵证</MenuItem>
                      <MenuItem value={20}>回乡证</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField

                    id="filled-email-input"
                    label="证件号码"
                    className={classes.textField}

                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="dense"
                    variant="filled"
                  />
                  <TextField
                    id="filled-password-input"

                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="dense"
                    variant="filled"
                  />
                  <TextField
                    id="filled-dense"
                    label="验证码"
                    className={classNames(classes.textField, classes.dense)}
                    style={{ width: 'auto' }}
                    margin="dense"
                    variant="filled"
                  />
                  <div style={{ width: '200px', height: '40px' }}></div>
                  <Button variant="outlined" className={classes.button}>
                    登录
      </Button>
                  <Button className={classes.button2} style={{ marginLeft: 180 }}>
                    忘记密码
      </Button>
                  <Button color="primary" className={classes.button2}>
                    即刻开户
      </Button>
                </form>

              </TabContainer>}
              {value === 1 && <TabContainer>
                <form className={classes.root} autoComplete="off" style={{ width: '100%' }}>
                  <TextField

                    id="filled-email-input"
                    label="基金账号"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="dense"
                    variant="filled"
                  />
                  <TextField
                    id="filled-password-input"

                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="dense"
                    variant="filled"
                  />
                  <TextField
                    id="filled-dense"
                    label="验证码"
                    className={classNames(classes.textField, classes.dense)}
                    style={{ width: 'auto' }}
                    margin="dense"
                    variant="filled"
                  />
                  <div style={{ width: '200px', height: '40px' }}></div>
                  <Button variant="outlined" className={classes.button}>
                    登录
      </Button>
                </form>
              </TabContainer>}

            </div>
          </div>
        </div>
        <div style={{height:'70px'}}>
        <div className={style.c_footer}>
                <hr/>
                <ul>
                  <li>返回首页</li>
                  <li>常见问题</li>
                  <li>客服热线400-820-0860</li>
                </ul>

        </div>
        </div>
      </div>

    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);

