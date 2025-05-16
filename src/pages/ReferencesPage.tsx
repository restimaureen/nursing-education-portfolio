import React from 'react';
import { 
  PageContainer, 
  SectionTitle, 
  ContentCard,
  TwoColumnGrid,
  ImageContainer
} from '../components/SharedStyles';
import styled from 'styled-components';
import { theme } from '../theme';

const ReferenceList = styled.div`
  margin: 2rem 0;
`;

const Reference = styled.div`
  margin-bottom: 1.5rem;
  padding-left: 2rem;
  text-indent: -2rem;
  line-height: 1.6;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${theme.secondary};
  }
`;

const ReferencesPage = () => {
  return (
    <PageContainer>
      <SectionTitle>References & Academic Sources</SectionTitle>
      
      <TwoColumnGrid>
        <ImageContainer>
          <img src="/images/reference 1.jpg" alt="Academic Research" />
        </ImageContainer>
        <ImageContainer>
          <img src="/images/reference 2.jpg" alt="Library Resources" />
        </ImageContainer>
      </TwoColumnGrid>
      
      <ContentCard>
        <h3>Course References</h3>
        <ReferenceList>
          <Reference>
            Agarwal, V., Kaur, S., Gupta, S., Zaveri, B., Sohal, J., Shrivastav, A., & Shrivastav, K. (2024). Adoption of advanced systems for digital resource management in academic institutions. <em>Evolutionary Studies in Imaginative Culture</em>. https://doi.org/10.70082/esiculture.vi.1089
          </Reference>
          <Reference>
            Badil, J. (2024). From classroom to clinic: Modernizing nursing education for a digital age. <em>Nursearcher (Journal of Nursing & Midwifery Sciences), 4</em>(3), 110-118. https://doi.org/10.54393/nrs.v4i03.110
          </Reference>
          <Reference>
            Benner, P., Sutphen, M., Leonard, V., & Day, L. (2021). <em>Educating nurses: A call for radical transformation—10 years later</em>. Jossey-Bass.
          </Reference>
          <Reference>
            Cabanes, R. V. D., Gargarino, A. M., Delos Reyes, J., Sales, R. A. J., Ramos, A. R., Secreto, B. P., Roxas‐Ridulme, Q., Ramos, R., & de Jesus, R. (2024). Issues, innovations, and challenges: Simulation technologies in related learning experiences. <em>SN Computer Science, 5</em>(613). https://doi.org/10.1007/s42979-024-02904-3
          </Reference>
        </ReferenceList>
      </ContentCard>
      
      <ContentCard>
        <h3>Digital Education Resources</h3>
        <ReferenceList>
          <Reference>
            Chen, L., Rodriguez, K., & Patel, V. (2024). Artificial intelligence applications in nursing education: A systematic review. <em>Journal of Nursing Education, 63</em>(4), 215-228.
          </Reference>
          <Reference>
            Crawford, C. L., Spicer, J. G., & Armstrong, M. A. (2020). Gap analysis: Synergies and opportunities for effective nursing leadership. <em>Nursing Economics, 38</em>(1), 8-28.
          </Reference>
          <Reference>
            Ericsson, K. A. (2018). The differential influence of experience, practice, and deliberate practice on the development of superior individual performance. In K. A. Ericsson, R. R. Hoffman, A. Kozbelt, & A. M. Williams (Eds.), <em>The Cambridge handbook of expertise and expert performance</em> (2nd ed., pp. 745-769). Cambridge University Press.
          </Reference>
          <Reference>
            Foronda, C. L., Fernandez-Burgos, M., Nadeau, C., Kelley, C. N., & Henry, M. N. (2020). Virtual simulation in nursing education: A systematic review spanning 1996 to 2018. <em>Simulation in Healthcare, 15</em>(1), 36-48.
          </Reference>
        </ReferenceList>
      </ContentCard>
    </PageContainer>
  );
};

export default ReferencesPage;
