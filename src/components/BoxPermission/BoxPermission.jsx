import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchBar from '../Search/Search';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import DateRangeIcon from '@mui/icons-material/DateRange';
import IndicatorsTable from '../IndicatorsTable/IndicatorsTable';

const BoxPermission = () => {
  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 3, mx: 12, my: 2}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '.6px solid #f5f5f5', paddingBottom: 2, paddingRight: 12, gap: 12}}>
          <SearchBar />
          <Chip
                icon={<DateRangeIcon />}
                label="Qui. 21, 2025 - Dom. 24, 2025 "
                onDelete={() => {}}
                sx={{
                  bgcolor: '#f5f5f5',
                  color: '#C4C4C4',
                  height: 40,
                  borderRadius: 3,
                  '& .MuiChip-icon': {
                    color: '#C4C4C4',
                  },
                }}
              />
          <Button sx={{ borderRadius: 12 }}>
              <FilterAltIcon />
          </Button>
        </div>
        <IndicatorsTable />
    </Box>
  );
};

export default BoxPermission;