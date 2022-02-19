package net.javaguides.springboot;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import java.util.List;
import net.javaguides.springboot.benatural.model.Product;
import net.javaguides.springboot.benatural.repository.ProductRepository;
@SpringBootTest
class BeNaturalApplicationTests {
	@Autowired
    MockMvc mockMvc;
	@Autowired
    ProductRepository productRepository;
	@BeforeEach
    void setUp() {
        productRepository.deleteAll();
    }
	@Test
    void returnsTheExistingProduct() throws Exception {
        addSampleProduct();
        mockMvc.perform(get("/api/product"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].productName", equalTo("Facial Recover Serum")))
                .andExpect(jsonPath("$[1].productName", equalTo("Nutrient Rich Facial")))
                .andDo(print());
    }
	private void addSampleProduct() { 
		List<Product> product = List.of(
			new Product ( "Serum","Say hello to our Facial Recovery Serum! Our hydrating, nutrient filled Facial Recovery Serum has a light consistency for speedy absorption, and infuses detoxifying Super Green extracts of Kale, Spirulina and Parsley", "https://drive.google.com/uc?export=download&id=1vN_0DKf8jKNfpvAdZlpZEEfzUuDEJNha","Facial Recover Serum", "50"),
			new Product ("Moisturizer", "Our Nutrient Rich Facial Moisturizer is perfect for you! It is enriched with Super Greens extracts of Kale, Spirulina, Parsley and Chlorella to give your skin a nutrient boost to promote a radiant, glowing and healthy complexion.", "https://drive.google.com/uc?export=download&id=1kqTzBL9ckihr9MSpveHLExZHyJkrFSOh","Nutrient Rich Facial", "60")
		);
		productRepository.saveAll(product);
	}
}