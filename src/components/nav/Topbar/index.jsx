import React from 'react';
import './style.scss';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbar__wrap">
        <div className="topbar__search">
          <input type="text" placeholder='Enter a song name, genre or MV...' />
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <div className="topbar__right">
          <div className="topbar__actions">
            <ion-icon name="diamond-outline"></ion-icon>
            <ion-icon name="arrow-up-circle-outline"></ion-icon>
            <ion-icon name="construct-outline"></ion-icon>
          </div>
          <div className="topbar__user">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/327cb5ee-bc6c-4a31-860f-d79a7c8673ed/df2wu6i-a3f1fb50-3f77-4cdd-bc77-add795932810.jpg/v1/fill/w_616,h_350,q_70,strp/queen_meve_thronebreaker_the_witcher_tales_cosplay_by_victoriahofferson_df2wu6i-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI3IiwicGF0aCI6IlwvZlwvMzI3Y2I1ZWUtYmM2Yy00YTMxLTg2MGYtZDc5YTdjODY3M2VkXC9kZjJ3dTZpLWEzZjFmYjUwLTNmNzctNGNkZC1iYzc3LWFkZDc5NTkzMjgxMC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lg9TaXdzI-PqmL81mGCkv-F3BE59bt6BtKAM-CFivb0" alt="" />
            <ion-icon name="caret-down-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  )
}
