import { ImageResponse } from 'next/og';

export const alt = 'Eovy — Forecasting meteorológico y climático para energías renovables';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: 'linear-gradient(120deg, #DCF0E6 0%, #D2E9F8 60%, #FFF4D6 100%)',
          color: '#0D2A2B',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 190, fontWeight: 600, letterSpacing: -6, lineHeight: 1 }}>Eovy</div>
        </div>
        <div style={{ display: 'flex', fontSize: 58, fontWeight: 300, lineHeight: 1.15, maxWidth: 900 }}>
          Forecasting meteorológico y climático para energías renovables
        </div>
      </div>
    ),
    { ...size }
  );
}
