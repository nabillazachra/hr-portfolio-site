import { Box, Typography, Container, TextField, Button, Grid } from '@mui/material';

const InquirySection = () => {
  return (
    <Box sx={{ bgcolor: '#000000', py: { xs: 8, md: 15 }, position: 'relative', overflow: 'hidden' }}>
      {/* Decorative diagonal overlay from the design image */}
      <Box 
        sx={{ 
          position: 'absolute', 
          right: 0, 
          top: 0, 
          bottom: 0, 
          width: '35%', 
          bgcolor: 'rgba(255, 255, 255, 0.05)', 
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
          display: { xs: 'none', md: 'block' },
          zIndex: 1
        }} 
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container>
          <Grid item xs={12} md={8}>
            {/* Heading: Merriweather Serif - Executive Presence */}
            <Typography 
              variant="h2" 
              sx={{ 
                color: 'white', 
                fontSize: { xs: '2.25rem', md: '3.5rem' }, 
                fontFamily: '"Merriweather", serif',
                fontWeight: 700, 
                mb: 3, 
                lineHeight: 1.2,
                letterSpacing: -0.5
              }}
            >
              Let's strengthen your organizational framework.
            </Typography>

            {/* Subheading: Professional Context */}
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.6)', 
                fontSize: '1.1rem', 
                mb: 8, 
                maxWidth: 600,
                lineHeight: 1.6
              }}
            >
              Currently open for strategic consulting or senior-level opportunities in HR and Industrial Relations.
            </Typography>

            {/* Structural Form Layout: Explicit Row Isolation to Prevent Stacking Issues */}
            <Box component="form" noValidate sx={{ width: '100%', maxWidth: '850px' }}>
              
              {/* ROW 1: Name and Email - Locked horizontal row on desktop */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Full Name"
                    variant="outlined"
                    sx={{
                      bgcolor: '#111827',
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        height: '56px',
                        '& fieldset': { borderColor: '#1e293b' },
                        '&:hover fieldset': { borderColor: '#334155' },
                        '&.Mui-focused fieldset': { borderColor: '#D9B061' },
                      },
                      '& .MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 }
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Email Address"
                    variant="outlined"
                    sx={{
                      bgcolor: '#111827',
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        height: '56px',
                        '& fieldset': { borderColor: '#1e293b' },
                        '&:hover fieldset': { borderColor: '#334155' },
                        '&.Mui-focused fieldset': { borderColor: '#D9B061' },
                      },
                      '& .MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 }
                    }}
                  />
                </Box>
              </Box>

              {/* ROW 2: Message - Isolated full-width container */}
              <Box sx={{ width: '100%', mb: 3 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Message"
                  variant="outlined"
                  sx={{
                    bgcolor: '#111827',
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: '#1e293b' },
                      '&:hover fieldset': { borderColor: '#334155' },
                      '&.Mui-focused fieldset': { borderColor: '#D9B061' },
                    },
                    '& .MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 }
                  }}
                />
              </Box>

              {/* FOOTER ROW: Action Button */}
              <Box sx={{ textAlign: 'left' }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#EAC583', // Exact High-Contrast Gold
                    color: 'black',
                    fontWeight: 900,
                    px: 5,
                    py: 1.8,
                    borderRadius: '2px', // Strategic Rectangular Design
                    textTransform: 'none',
                    fontSize: '1rem',
                    boxShadow: 'none',
                    '&:hover': { bgcolor: '#D9B061', boxShadow: 'none' }
                  }}
                >
                  Send Inquiry
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InquirySection;
