import React from 'react';
import { Text, initializeIcons } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';


const container = {
  display: 'flex',
  justifyContent: 'center',
  margin: '34px 0 19px 0',
};

const icon = {
  fontSize: 24,
  padding: 10,
  verticalAlign: 'middle',
  paddingLeft: 0,
  color: '#0078d4'
}

const styles = {
  cardStyles: {
    root: {
      background: 'white',
      padding: 10,
      borderTop: '5px solid #0078d4',
      width: '90%',
      maxWidth: '90%',
      margin: 'auto',
    }
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  },
  amount: {
    root: {
      fontSize: 30,
    }
  },
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0078d4',
    }
  }
};

const cards = [
  {
    title: 'Total Orders',
    amount: '65K',
    icon: 'Money',
    percentage: '2.3',
  },
  {
    title: 'Total sales',
    amount: '938.6M',
    icon: 'PaymentCard',
    percentage: '0.3'
  },
  {
    title: 'Total Customers',
    amount: '171.2k',
    icon: 'Savings',
    percentage: '1.3'
  },
  {
    title: 'People Online',
    amount: '171.2k',
    icon: 'Savings',
    percentage: '1.3'
  }
]

const CardsSection = () => {
  initializeIcons();
  return (
    <div style={container}>
      {cards.map((card) => (
        <div className="s-Grid-col ms-sm12 ms-xl12">
          <Card styles={styles.cardStyles}>
            <Card.Section>
              <Card.Item>
                <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                <Text styles={styles.header}>{card.title}</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.amount}>{card.amount}</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.percentage}>
                  {card.percentage} %
                </Text>
              </Card.Item>
              
            </Card.Section>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardsSection;