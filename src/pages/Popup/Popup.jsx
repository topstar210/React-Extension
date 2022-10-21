import React from 'react';
import {
  MemoryRouter,
  Routes,
  Route,
} from 'react-router-dom'
import './Popup.css';
import Keywords from './components/Keywords';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import GetStarted from './components/GetStarted';
import ScopeBuilder from './components/ScopeBuilder';
import StatusConnecting from './components/StatusConnecting';
import StatusFailed from './components/StatusFailed';
import ScopeBuilderActive from './components/ScopeBuilderActive';
import Home from './components/Home';
import CreateProposal from './components/CreateProposal';
import ProposalPreview from './components/ProposalPreview';
import AccountSuspendedOverlay from './components/AccountSuspendedOverlay';
import { useEffect } from 'react';
import { fetchJobs } from '../../store/reducers/keywords';
import { useDispatch } from 'react-redux';


const Popup = () => {
  const dispatch = useDispatch()
  const RSS_REFRESH = 5;

  const fetchData = async () => {
    await dispatch(fetchJobs())
  }
  useEffect(() => {
    fetchData()
    let intervalId = setInterval(() => {
      console.log('fetch jobs, requested')
      fetchData()
  }, RSS_REFRESH *60 *1000);
    return () =>clearInterval(intervalId)
  }, [])
  
  return (
    <>
      <MemoryRouter
        initialEntries={[
          '/Home', '/Login', '/SignUp', '/ForgotPassword',
          '/ResetPassword', '/GetStarted', '/KeywordsConnect',
          '/KeywordsConnected', '/ScopeBuilder', '/StatusConnecting',
          '/StatusFailed', '/ScopeBuilderActive', '/CreateProposal',
          '/AccountSuspendedOverlay', '/ProposalPreview'
        ]}
        initialIndex={6}
      >
        <Routes>
          <Route index path='/Home' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/GetStarted' element={<GetStarted />} />
          <Route path='/KeywordsConnect' element={
            <Keywords
              styles={'bg-gradient-blue'}
              text={'Connect ScopeBuilder'}
              fill={'#1890ff'}
              link={'/ScopeBuilder'}
            />}
          />
          <Route path='/KeywordsConnected' element={
            <Keywords
              styles={'bg-gradient-green'}
              text={'ScopeBuilder Connected'}
              fill={'#66DC78'}
              link={'/ScopeBuilderActive'}
            />}
          />
          <Route path='/ScopeBuilder' element={<ScopeBuilder />} />
          <Route path='/StatusConnecting' element={<StatusConnecting />} />
          <Route path='/StatusFailed' element={<StatusFailed />} />
          <Route path='/ScopeBuilderActive' element={<ScopeBuilderActive />} />
          <Route path='/CreateProposal' element={<CreateProposal />} />
          <Route path='/AccountSuspendedOverlay' element={<AccountSuspendedOverlay />} />
          <Route path='/ProposalPreview' element={<ProposalPreview />} />
        </Routes>
      </MemoryRouter>
    </>
  );

};

export default Popup;
