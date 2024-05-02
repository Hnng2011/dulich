import './styles.css';

export default function SecondHero() {
    return (
        <section className='container bg-white uppercase bg-img border-2' style={{ backgroundImage: 'url(/assets/img/bg-home-inspire.jpg)' }}>
            <div className='w-full h-full py-12 '>
                <h1 className='text-5xl text-center text-marooncus font-semibold mb-8'>Dịch vụ Du lịch và Lữ hành</h1>
                <p className='mb-4'>
                    Chào mừng đến với dịch vụ du lịch và lữ hành của chúng tôi, nơi bạn có thể khám phá những hành trình đầy màu sắc và trải nghiệm những kỳ quan tuyệt vời của thế giới. Tại đây, chúng tôi cung cấp một loạt các tour du lịch và chương trình lữ hành đa dạng, từ những điểm đến phổ biến nhất đến những nơi ít người biết đến nhưng không kém phần thú vị.
                </p>
                <p className='mb-8'>
                    Với đội ngũ hướng dẫn viên chuyên nghiệp và tận tâm cùng các dịch vụ chăm sóc khách hàng hàng đầu, chúng tôi cam kết mang lại cho bạn trải nghiệm du lịch đáng nhớ và an toàn nhất. Bất kể bạn là một nhà thám hiểm phiêu lưu hay một du khách muốn thư giãn, chúng tôi luôn sẵn lòng phục vụ và đáp ứng mọi nhu cầu của bạn.</p>
                <p>
                    Hãy để chúng tôi hướng dẫn bạn khám phá thế giới, tạo ra những kỷ niệm vĩnh cửu và chia sẻ những cảm xúc khó quên trên mỗi hành trình. Hãy đồng hành cùng chúng tôi và khám phá những điều mới mẻ mỗi ngày!</p>
            </div>
        </section >
    );
}
