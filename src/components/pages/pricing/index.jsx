import React, { Component } from 'react';
import Button from '../../atoms/button';
import Check from '../../atoms/svg/check';
import Stars from '../../atoms/svg/stars';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import './style.scss';

class Pricing extends Component {
  render() {
    return (
      <div className='pricing'>
        <Header></Header>
        <div className='pre-text'>
          <div className='header-group'>
            <Stars />
            <div className='title'>We have Got a Pricing Plan that is Perfect for you </div>
          </div>
          <div className='sub-title'>We believe that FlickBook should be accessible to all companies no matter what the size</div>
        </div>
        <table className='pricing-table'>
          <thead>
            <tr>
              <th>Reporting and Analytics</th>
              <th><img src={require('../../atoms/images/Free.png')} alt='not found' /></th>
              <th><img src={require('../../atoms/images/Dolphin.png')} alt='not found' /></th>
              <th><img src={require('../../atoms/images/Shark.png')} alt='not found' /></th>
              <th><img src={require('../../atoms/images/Whale.png')} alt='not found' /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Free Trial</td>
              <td>Free</td>
              <td>Free</td>
              <td>Free</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Monthly Sales</td>
              <td>Less than 1,00,000</td>
              <td>1,00,000-10,00,000</td>
              <td>10,00,000-50,00,000</td>
              <td>More than 50,00,000</td>
            </tr>
            <tr>
              <td>Amazon MTR to GSTR1 csv </td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Amazon MTR to JSON File for easy filing of GSTR1 on GST portal</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Online GSTR1 Filing</td>
              <td></td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Amazon MTR to Tally, Vyapar</td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Amazon MTR to Quickbooks, zoho</td>
              <td></td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Sales and Tax Analytics</td>
              <td>Only First Month</td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Data storage</td>
              <td>Only First Month</td>
              <td>1FY</td>
              <td>2FY</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Vendors & Purchase orders</td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Bank reconciliation</td>
              <td></td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>GSTR2A, GSTR3B summary and reconciliation</td>
              <td></td>
              <td></td>
              <td></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>HSN code finder </td>
              <td></td>
              <td></td>
              <td></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Recurring bills</td>
              <td></td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Employee Records & Automated salary payments</td>
              <td></td>
              <td></td>
              <td></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Expenses & recurring expenses</td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Users</td>
              <td>1</td>
              <td>1+CA</td>
              <td>3+CA</td>
              <td>5+CA</td>
            </tr>
            <tr>
              <td>Support</td>
              <td></td>
              <td>email</td>
              <td>email + voice</td>
              <td>email + voice + chat</td>
            </tr>
            <tr>
              <td>Automated Financial Statements</td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Amazon return report analysis</td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
            <tr>
              <td>Amazon payments reconciliation</td>
              <td></td>
              <td><Check /></td>
              <td><Check /></td>
              <td><Check /></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td><Button label='GET STARTED'></Button></td>
              <td><Button label='GET STARTED'></Button></td>
              <td><Button label='GET STARTED'></Button></td>
            </tr>
          </tfoot>
        </table>
        <Footer />
      </div>
    );
  }
}

export default Pricing;
