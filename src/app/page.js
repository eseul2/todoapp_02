'use client';

import Button from '@mui/material/Button';

export default function Home() {
  return (
    <>
      <button class="tw-bg-red-400">버튼</button>
      <Button className="tw-bg-red-400" variant="contained">
        Text
      </Button>
    </>
  );
}
