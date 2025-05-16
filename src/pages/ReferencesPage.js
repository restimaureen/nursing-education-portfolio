import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem 0;
`;

const ReferencesList = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 2rem 0;
`;

const Reference = styled.div`
  margin-bottom: 1.5rem;
  padding-left: 2rem;
  text-indent: -2rem;
  line-height: 1.6;
`;

function ReferencesPage() {
  return (
    <PageContainer>
      <h1 className="page-title">References</h1>
      
      <ReferencesList>
        <Reference>
          Agarwal, V., Kaur, S., Gupta, S., Zaveri, B., Sohal, J., Shrivastav, A., & Shrivastav, K. (2024). Adoption of advanced systems for digital resource management in academic institutions. <em>Evolutionary Studies in Imaginative Culture</em>. https://doi.org/10.70082/esiculture.vi.1089
        </Reference>
        
        <Reference>
          Atmiller, H., & Pepe, S. (2022). Educational technology in nursing education: A study on enhancing student engagement and learning outcomes. <em>Journal of Nursing Education and Practice, 12</em>(5), 14-22.
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
        
        <Reference>
          Gause, G., Mokgaola, I. O., & Rakhudu, M. A. (2022). Technology usage for teaching and learning in nursing education: An integrative review. <em>Curationis, 45</em>(1), e1–e9. https://doi.org/10.4102/curationis.v45i1.2261
        </Reference>
        
        <Reference>
          Honkavuo, L. (2020). Digital teaching in nursing education: A quantitative study on nursing students' views. <em>International Journal of Caring Sciences, 13</em>(2), 783-791.
        </Reference>
        
        <Reference>
          Kolb, A. Y., & Kolb, D. A. (2017). <em>The experiential educator: Principles and practices of experiential learning</em>. EBLS Press.
        </Reference>
        
        <Reference>
          Laugaland, K., Akerjordet, K., Frøiland, C., & Aase, I. (2023). Co-creating digital educational resources to enhance quality in student nurses' clinical education in nursing homes: Report of a co-creative process. <em>Journal of Advanced Nursing</em>. https://doi.org/10.1111/jan.15800
        </Reference>
        
        <Reference>
          Ramos, R. C., Garcia, P., Roxas‐Ridulme, Q., Cabanes, R. V., Rosario, H. M., Enrile, M. K., & De Jesus, R. (2024). "The internet is slow!": Building a context-oriented learning management system. <em>International Journal of Evaluation and Research in Education, 13</em>(1), 424-435.
        </Reference>
        
        <Reference>
          Sweller, J. (2011). Cognitive load theory. <em>Psychology of Learning and Motivation, 55</em>, 37-76. https://doi.org/10.1016/B978-0-12-387691-1.00002-8
        </Reference>
        
        <Reference>
          Tischendorf, T., Heitmann-Möller, A., Ruppert, S.-N., Marchwacka, M., Schaffrin, S., Schaal, T., & Hasseler, M. (2024). Sustainable integration of digitalisation in nursing education—an international scoping review. <em>Frontiers in Health Services</em>. https://www.frontiersin.org/journals/healthservices/articles/10.3389/frhs.2024.1344021/full
        </Reference>
      </ReferencesList>
    </PageContainer>
  );
}

export default ReferencesPage;
