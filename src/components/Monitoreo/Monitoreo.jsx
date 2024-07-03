
import Sidebar from '../../templates/Sidebar/Sidebar'
import './Monitoreo.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import Footer from '../../templates/Footer/Footer';
import { db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

export const Monitoreo = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {    
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'powerbitoken', 'token');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data_token = docSnap.data();
          setAccessToken(data_token.TokenPowerBi); 
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    fetchData();
  }, []);
 
  return (
    <>
      <div>
        <PowerBIEmbed
          embedConfig={{
            type: 'report',
            id: '5f8aef32-b9b8-4f42-9538-5d1872923d4e',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=5f8aef32-b9b8-4f42-9538-5d1872923d4e&groupId=40cbc417-80a7-4411-9ee1-3d27c7126ed2&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
            accessToken: accessToken,
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },
              background: models.BackgroundType.Transparent,
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }],
              ['visualClicked', () => console.log('visual clicked')],
              ['pageChanged', (event) => console.log(event)],
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </div>
      <Footer />
    </>
  )
}
