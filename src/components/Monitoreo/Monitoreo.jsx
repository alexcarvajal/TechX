
import React from 'react'
import Sidebar from '../../templates/Sidebar/Sidebar'
import './Monitoreo.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

export const Monitoreo = () => {
  return (
    <>
    <div>
    <PowerBIEmbed
      embedConfig = {{
        type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
        id: 'b8565d9d-0364-4698-b1de-fc991292c8dd',
        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=b8565d9d-0364-4698-b1de-fc991292c8dd&groupId=40cbc417-80a7-4411-9ee1-3d27c7126ed2&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QyLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTgyMTQ5MzctMjMzYi00YjM2LTg2YmYtMGI1ZjMzMzdiZWUxLyIsImlhdCI6MTcxOTk0MDIyMiwibmJmIjoxNzE5OTQwMjIyLCJleHAiOjE3MTk5NDU2NTIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WEFBQUFaakVYaVZadUQwVHZEeG9HVFdxMmVvZ2tWNFNTenhTL3h6MmRkMW4vSnBTRzIrQVF3M3d1S05CazB1S1gwUHZ0IiwiYXBwaWQiOiI4NzFjMDEwZi01ZTYxLTRmYjEtODNhYy05ODYxMGE3ZTkxMTAiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlNhbGF6YXIgR2FsaW5kZXoiLCJnaXZlbl9uYW1lIjoiSmFyYnkgRGFuaWVsIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjgwMDo0ODQ6YWE3Njo5NjAwOmVjNDQ6OTE2Yjo1N2QxOmY0NjQiLCJuYW1lIjoiSmFyYnkgRGFuaWVsIFNhbGF6YXIgR2FsaW5kZXoiLCJvaWQiOiIwZTEyNjdlZi00YWQxLTRlY2YtYjAwZC1lMGY0MDZmMGFjMGMiLCJwdWlkIjoiMTAwMzIwMDBFOUNCMDAwNiIsInJoIjoiMC5BU2NBTjBraDZEc2pOa3VHdnd0Zk16ZS00UWtBQUFBQUFBQUF3QUFBQUFBQUFBQW5BSDAuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiNV90ZXNIZk9oVFd2QnJjME1meVFpbmMxNDJaOW5IOWNCWE8wc1JzVnNPSSIsInRpZCI6ImU4MjE0OTM3LTIzM2ItNGIzNi04NmJmLTBiNWYzMzM3YmVlMSIsInVuaXF1ZV9uYW1lIjoiZHNhbGF6YXJnQHVuaWNhdWNhLmVkdS5jbyIsInVwbiI6ImRzYWxhemFyZ0B1bmljYXVjYS5lZHUuY28iLCJ1dGkiOiJHSmtpcVUwX0EwMmV1MjYxR3lIMkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2lkcmVsIjoiMSAyMCJ9.nI-rPLZUFd13RwQc9R28nKoYoA-S5sCGQSIJBA-H4AYZZzWAMWzRC01KtApv4wckafqkFsICxJ5AJVOlFc_bqlyW1qtejwN0Y-FqkUDip-_YRTl4HNCcb8ukO5dPYkLboMJADKkPY0NAW0oRKLCezjn6k2OpvFYWu-KR5TjT79wrM3xu0is2yVCCrE3gU0VSB9TWNI7iOOT0udxYFt8sD-CEawHKJU3HA2wNtEZsm2NbbnyXnh16CQiHw9MxNW0YBDJlA1JI_ZQZJsZH728a52ZYQqXqXUG97AQrp1-Pg9BzHTwCSn7RT4RzD5xG5hESywoCZOyW6lG5qYaiBuz1rg',
        tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
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

      eventHandlers = {
        new Map([
          ['loaded', function () {console.log('Report loaded');}],
          ['rendered', function () {console.log('Report rendered');}],
          ['error', function (event) {console.log(event.detail);}],
          ['visualClicked', () => console.log('visual clicked')],
          ['pageChanged', (event) => console.log(event)],
        ])
      }

      cssClassName = { "Embed-container" }

      getEmbeddedComponent = { (embeddedReport) => {
        window.report = embeddedReport;
      }}
    />
    </div>
    </>
  )
}
