// 🐾 시스템 사용 예시
const manager = new PetHealthManager();

// 펫 등록
const pet1 = new Pet('나비', '고양이', ['종합백신'], new Date('2023-03-10'));
manager.registerPet(pet1);

// 예방접종 추가
pet1.addVaccination('광견병');
pet1.addVaccination('광견병'); // 중복 테스트

// 건강 상태 검사 시작
manager.checkHealthStatus();

// 5초 후 건강검진 업데이트 (경고 초기화 테스트)
setTimeout(() => {
  pet1.updateHealthCheckDate(new Date());
}, 5000);
